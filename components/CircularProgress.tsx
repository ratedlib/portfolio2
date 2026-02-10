'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import { IconType } from 'react-icons';

interface CircularProgressWithLabelProps {
  value: number;
  size?: number;
  thickness?: number;
}

function CircularProgressWithLabel({
  value,
  size = 90,
  thickness = 6,
}: CircularProgressWithLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setProgress(value);
        clearInterval(timer);
      } else {
        setProgress(Math.min(start, value));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative inline-flex"
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        size={size}
        thickness={thickness}
        sx={{
          color: '#5B52FF',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: 'white',
            fontSize: '1.4rem',
            fontWeight: 600,
          }}
        >
          {Math.round(progress)}%
        </Typography>
      </Box>
    </motion.div>
  );
}

interface SkillProgressProps {
  skill: string;
  level: number;
  icon?: IconType;
}

export function SkillProgress({ skill, level, icon: Icon }: SkillProgressProps) {
  return (
    <div className="flex flex-col items-center gap-2">
              {Icon && <Icon className="w-10 h-10 mb-5" />}
      <CircularProgressWithLabel value={level} />
      
      <span className=" text-lg font-medium">{skill}</span>

    </div>
  );
}
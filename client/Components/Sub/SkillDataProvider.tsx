"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <div>

        </div>
    )
}

export default SkillDataProvider
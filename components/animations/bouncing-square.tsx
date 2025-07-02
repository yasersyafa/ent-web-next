"use client"

export type BouncingSquareProps = {
    isMobile: false | boolean
    size: 'sm' | 'md' | 'lg'
    className?: string
}

const convertToTailwind = (size: 'sm' | 'md' | 'lg') => {
    if(size === 'sm') {
        return 'size-8'
    } else if(size === 'md') {
        return 'size-12'
    }
    return 'size-16'
}

export default function BouncingSquares({ isMobile = false, size, className } : BouncingSquareProps) {
    return (
        <div className={`absolute ${isMobile ? 'block lg:hidden' : 'hidden lg:block'} animate-bounce ${className ?? ''}`}>
            <div className="relative">
                <div className={`${convertToTailwind(size)} bg-[#134679]`}></div>
                <div className={`absolute -bottom-2 -right-2 ${convertToTailwind(isMobile ? size : 'md')} bg-teal-400`}></div>
            </div>
      </div>
    )
}
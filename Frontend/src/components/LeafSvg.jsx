import bgLeaf from "../assets/leaf.svg"
import React from 'react'

export default function LeafSvg() {
  return (
    <img src={bgLeaf} className=" w-[60vw] opacity-[0.03] h-[60vw] max-w-[400px] max-h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
  )
}

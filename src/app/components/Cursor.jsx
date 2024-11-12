"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={7}
      outerSize={25}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={false}
      innerStyle={{
        backgroundColor: 'var(--foreground)',
      }}
      outerStyle={{
        border: '2px solid var(--foreground)',
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="radio"]',
        'input[type="email"]',
        'input[type="submit"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'svg',
      ]}
    />
    </div>
  );
}
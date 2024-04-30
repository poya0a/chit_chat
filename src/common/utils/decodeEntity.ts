import React from 'react';

export default function decodeEntity(str: string) {
  const regex = /&(#40|#41|#60|#62|#64|lt|gt|#123|#125|#126|amp|#38);/g;
  const chars: Record<string, string> = {
    '&#40;': '(',
    '&#41;': ')',
    '&#60;': '<',
    '&#62;': '>',
    '&#64;': '@',
    '&lt;': '<',
    '&gt;': '>',
    '&#123;': '{',
    '&#125;': '}',
    '&#126;': '~',
    '&amp;': '&',
    '&#38;': '&'
  };

  if (regex.test(str)) {
    return str.replace(regex, (matched) => chars[matched] || matched);
  }

  return str;
}

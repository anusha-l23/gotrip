export default function isTextMatched(tag, match) {
  if (tag && match && typeof tag === 'string' && typeof match === 'string') {
    const lowercaseTag = tag.toLocaleLowerCase();
    const lowercaseMatch = match.toLocaleLowerCase();
    
    return lowercaseTag === lowercaseMatch;
  }
  return false;
}
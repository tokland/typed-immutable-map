import {Indexed, Node, NodeType} from '../types';

export function toIndexNode<K, V>(
  count: number,
  index: number,
  children: Array<Node<K, V>>): Indexed<K, V>
{
  const newChildren = new Array(count - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0; i < children.length; ++i) {
    if (i !== index) {
      const child = children[i];
      if (child && child.type > NodeType.EMPTY) {
        newChildren[g++] = child;
        bitmap |= 1 << i;
      }
    }
  }

  return { type: NodeType.INDEX, mask: bitmap, children: newChildren };
}

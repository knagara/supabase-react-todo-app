import { IconButton, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default function DeleteTask({ id }) {
  return <IconButton isRound="true" icon={<FiTrash2 />} />;
}

// hooks/useRemoveStatusFromParam.ts
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const useRemoveStatusFromParam = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const removeStatus = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('status');
    router.replace(`/users?${newParams.toString()}`);
  };

  return removeStatus;
}

export default useRemoveStatusFromParam;

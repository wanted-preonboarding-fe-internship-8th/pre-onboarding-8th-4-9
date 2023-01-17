import { useCallback, useState } from 'react';

export default function useSetCommentformValue(prevFormValue: any) {
  const [formValue, setFormValue] = useState(prevFormValue);
  const onChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFormValue((formValue: any) => ({ ...formValue, [name]: value }));
  }, []);
  return [formValue, onChange];
}

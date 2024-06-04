import { Toaster, toast } from 'sonner';

export const copyURL = async () => {
  let currentUrl = window.document.location.href;
  try {
    await navigator.clipboard.writeText(currentUrl);
    toast.success('주소가 성공적으로 복사되었습니다!');
  } catch (err) {
    let t = document.createElement('textarea');
    t.value = currentUrl;
    document.body.appendChild(t);
    t.select();
    try {
      document.execCommand('copy');
      toast.success('주소가 성공적으로 복사되었습니다!');
    } catch (err) {
      toast.error('주소 복사에 실패했습니다.');
    }
    document.body.removeChild(t);
  }
};

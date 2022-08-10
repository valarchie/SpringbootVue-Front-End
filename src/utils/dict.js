import { getDicts } from '@/api/system/config';

/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((d, index) => {
      res.value[d] = [];
      getDicts(d).then((resp) => {
        res.value[d] = resp.map((p) => ({ label: p.label, value: p.value, elTagType: p.cssTag }));
      });
    });
    return toRefs(res.value);
  })();
}

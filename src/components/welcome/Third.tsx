import { defineComponent } from 'vue';
import s from './First.module.scss';
import chart from '../../assets/icons/chart.svg';
import { RouterLink } from 'vue-router';
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.icon} src={chart} />
          <h2>省一笔就是赚一笔！</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          <RouterLink to="/welcome/4" >下一页</RouterLink>
          <RouterLink to="/start" >跳过</RouterLink>
        </div>
      </div>
    )
  }
})
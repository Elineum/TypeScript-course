// Вам потрібно створити умовний тип, що служить для встановлення типу,
// що повертається з функції. Як параметр типу повинен обов'язково виступати функціональний тип.

type TFirst<T> = T extends (...props: any[]) => infer R ? R : undefined;

// Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним)
// та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру
type TSecond<T> = T extends (prop: infer U) => infer R ? [R, U] : undefined;

type TSecondDetailed<T> = T extends (prop: (infer U)[]) => infer R
  ? [R, U]
  : T extends (prop: infer U) => infer R
  ? [R, U]
  : undefined;

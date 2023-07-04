# Easy Yandex Metrika Component

*✨ Very simple and lightweigh component *

A simple and lightweight React component for integrating Yandex Metrika into your Next.js application (tests with version 12, 13).

## Installation

> npm i easy-yandex-metrika-component-for-next-js



### After installation, you can use the YandexMetrika component in your application like this:

**1. Create Yandex Metrika Counter**
2. Use counter in your Layout, Head, App:

		import { METRIKA_COUNTER } from "@/constants/const";
		
3. Import  "easy-yandex-metrika-component-for-next-js" in your  Layout, Head, App:

		import YandexMetrika from "easy-yandex-metrika-component-for-next-js";

import YandexMetrika from 'yandex-metrika-component';

4. Use Component in your Layout, Head or App:

		<YandexMetrika counter={METRIKA_COUNTER} />

      **As example:**

		export default function App({ Component, pageProps }: AppProps) {
		  return (
			<Provider store={store}>
				<Head>
				</Head>
				<YandexMetrika counter={METRIKA_COUNTER} />
				<Component {...pageProps} />
			</Provider>
		  );
		}


## USE GOALS:

**Goal as hit:**
window.ym(YOUR_COUNTER_NUMBER, "hit", "/contacts (example)"); (counter, method, pageURL)

**Goal as goal:**
window.ym(YOUR_COUNTER_NUMBER, "reachGoal", "success"); (counter, method, goalName)
*
The component is imported 1 time in the root component. When using API goals, nothing additionally needs to be imported.*

** Goal using example:

		 const handleClick = (branchId: any) => {
			dispatch(setBranch(branchId));
			window.ym(METRIKA_COUNTER, "hit", "/contacts");
			router.push("/contacts");
		  };


## Props

**counter: **number	

## Contributing

We welcome contributions from the community. 
<template>
    <section>
		<div class="relative bg-teal-700 md:pt-32 pb-32 pt-12">
			<div class="px-4 md:px-10 mx-auto w-full flex flex-row flex-wrap justify-between">
				<p class="text-xl text-white" v-html="$t('welcome', { name: '{{name}}' })"></p>
			</div>
		</div>
    </section>
</template>

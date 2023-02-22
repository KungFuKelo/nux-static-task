<template>
    <ClientOnly>
        <div class="containerCus flex justify-around mt-10 gap-4">
            <div class=" min-w-[380px] basis-1 ">
                <SideCardMazad />
                <SideCardUsers />
                <SideCardInfo />
                <SideCardFav />
            </div>
            <div class="relevant basis-2 min-w-[600px] grow">
                <cardMazad />
                <card-msg />
                <cardDetails />
            </div>
        </div>
    </ClientOnly>
</template>

<script setup>

useHead({
    title: "Static Design",
})



</script>


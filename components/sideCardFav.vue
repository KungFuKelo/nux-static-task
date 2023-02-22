<template>
    <ClientOnly>
        <div dir="rtl" class=" border border-[#eee] shadow-lg rounded-md p-6 mb-4">
            <div class="text-purble font-bold text-lg mb-8">المزادات المفضلة</div>
            <div class="flex gap-2 mb-4">
                <div class="mazad-image p-2 rounded-lg w-32 h-32">
                    <div class="rounded-full h-8 w-8 bg-white text-[red] flex justify-center items-center"><i
                            class="fa-solid fa-heart"></i></div>
                    <div class="p-1 w-20 text-sm text-center bg-gold-dark text-white movin"> مزاد عام</div>
                </div>
                <div>
                    <div class="max-w-[180px] mb-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                        هذا
                    </div>
                    <div class="flex justify-between text-[#666] p-1">
                        <p>أعلى سعر</p>
                        <p class="text-purble font-medium">$$$$</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 mb-4">
                <div class="mazad-image p-2 rounded-lg w-32 h-32">
                    <div class="rounded-full h-8 w-8 bg-white text-[red] flex justify-center items-center"><i
                            class="fa-solid fa-heart"></i></div>
                    <div class="p-1 w-20 text-sm text-center bg-gold-dark text-white movin"> مزاد عام</div>
                </div>
                <div>
                    <div class="max-w-[180px] mb-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                        هذا
                    </div>
                    <div class="flex justify-between text-[#666] p-1">
                        <p>أعلى سعر</p>
                        <p class="text-purble font-medium">$$$$</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 mb-4">
                <div class="mazad-image p-2 rounded-lg w-32 h-32">
                    <div class="rounded-full h-8 w-8 bg-white text-[red] flex justify-center items-center"><i
                            class="fa-solid fa-heart"></i></div>
                    <div class="p-1 w-20 text-sm text-center bg-gold-dark text-white movin"> مزاد عام</div>
                </div>
                <div>
                    <div class="max-w-[180px] mb-6">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                        هذا
                    </div>
                    <div class="flex justify-between text-[#666] p-1">
                        <p>أعلى سعر</p>
                        <p class="text-purble font-medium">$$$$</p>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style>
.mazad-image {
    position: relative;
    background: url(@/assets/images/mazad.png);
    background-size: cover;
}

.movin {
    position: absolute;
    bottom: 22px;
    right: -12px;
}

.mazad-image::after {
    position: absolute;
    content: '';
    border: 12px solid red;
    border-color: transparent transparent transparent #FF961C;
    bottom: 10px;
    right: -24px;
}
</style>
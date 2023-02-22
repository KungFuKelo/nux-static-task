<template>
    <ClientOnly>
        <div class="pl-[48px] pr-[48px]">
            <div dir="rtl" class="w-full p-6 flex justify-between">
                <div class="flex gap-1 ">
                    <div
                        class="justify-center bg-pink-light text-pink-main font-semibold flex items-center gap-2 p-2 rounded-r-lg text-sm w-48">
                        <p> مزاد مباشر متعدد</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="bg-pink-light">
                        <form>
                            <input class="bg-pink-light p-2 outline-0 w-[520px]" type="search" placeholder="ابحث هنا">
                            <button class="p-2 w-12 bg-pink-main rounded-lg ">
                                <p class="text-white"><i class="fa-solid fa-magnifying-glass"></i></p>
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <div class="logo-image"></div>
                </div>
            </div>
        </div>
        <div
            class="pl-[64px] pr-[64px] text-white bg-gradient-to-r from-pink-main to-pink-dark p-4 w-full flex justify-between items-center">
            <ul class="flex items-center gap-5">
                <li>
                    <button
                        class=" bg-gradient-to-r from-gold to-gold-dark shadow-xl flex justify-center items-center gap-2 p-1 w-24 bg-gold rounded-xl">
                        <i class="fa-solid fa-chevron-down"></i>
                        <p>عربية</p>
                    </button>
                </li>
                <li><i class="fa-solid fa-heart"></i></li>
                <li><i class="fa-solid fa-bell"></i></li>
                <li><i class="fa-solid fa-money-check-dollar"></i></li>
            </ul>
            <ul class="flex items-center gap-10">
                <li>تصنيفات</li>
                <li>مشترياتي</li>
                <li>حسابي</li>
                <li>الرئيسية</li>
            </ul>

        </div>
    </ClientOnly>
</template>

<style>
.logo-image {
    cursor: pointer;
    background: url(@/assets/images/mazaady-logo.svg);
    background-size: cover;
    width: 150px;
    height: 40px;
}
</style>

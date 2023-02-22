<template>
    <ClientOnly>
        <div class="relative shadow-lg rounded-md ">
            <div class="main-image h-[500px] rounded-md flex justify-between p-4 pl-6 pr-6">
                <ul class=" flex gap-4">
                    <li
                        class="cursor-pointer bg-black/60 text-white p-2 rounded-full h-8 w-8 flex justify-center items-center text-sm">
                        <i class="fa-solid fa-share-nodes"></i>
                    </li>
                    <li
                        class="cursor-pointer bg-black/60 text-white p-2 rounded-full h-8 w-8 flex justify-center items-center text-sm">
                        <i class="fa-solid fa-heart"></i>
                    </li>
                    <li
                        class="cursor-pointer bg-black/60 text-white p-2 rounded-full h-8 w-8 flex justify-center items-center text-sm">
                        <i class="fa-solid fa-flag"></i>
                    </li>
                </ul>
                <ul class="flex">
                    <li
                        class=" rounded-l-md cursor-pointer p-2 bg-black/60 text-white  h-8 w-20 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-eye"></i> 3000
                    </li>
                    <li class=" cursor-pointer p-2 bg-black/60 text-white  h-8 w-20 text-sm flex items-center gap-2">
                        00:02:43</li>
                    <li
                        class=" rounded-r-md cursor-pointer p-2 bg-black/60 text-white  h-8 w-16 text-sm flex items-center gap-2">
                        $$$$$
                    </li>
                </ul>
            </div>
            <div class="p-6 pb-2 flex gap-4 justify-end">
                <div>
                    <i class="fa-solid fa-star text-gold"></i>
                    <i class="fa-solid fa-star text-gold"></i>
                    <i class="fa-solid fa-star text-gold"></i>
                    <i class="fa-solid fa-star text-gold"></i>
                    <i class="fa-solid fa-star text-gray"></i>
                </div>
                <div dir="rtl">
                    <div class="font-semibold text-purble">اسم البائع</div>
                    <div class="text-purble">90540000+</div>
                </div>
                <div class="relative user-image w-12 h-12">
                    <div
                        class=" shadow-md move-it absolute p-1 w-6 h-6 rounded-full bg-white flex justify-center items-center">
                        <i class="fa-solid fa-heart text-xs text-gray"></i>
                    </div>
                </div>
            </div>
            <div class="p-6 pt-2 pb-2 ">
                <p dir="rtl" class="text-purble font-bold text-lg">
                    شراء مجموعة من السيارات من موديلات 1990
                </p>
                <p class=" flex justify-end mt-1 w-full text-gray">
                    code 1234
                </p>
            </div>
            <div class="p-6 pt-2 flex justify-between items-center">
                <div class="flex gap-2">
                    <button
                        class="bg-gradient-to-r from-pink-main to-pink-dark text-white p-2 w-16 rounded-md">تأكيد</button>
                    <input dir="rtl" placeholder="أدخل السعر" type="text"
                        class=" p-2 w-64 border border-gray outline-none rounded-md">
                </div>
                <ul class="flex gap-2">
                    <li class="cursor-pointer p-3 w-18 bg-pink-light text-center text-pink-main rounded-md">+10000
                    </li>
                    <li class="cursor-pointer p-3 w-18 bg-pink-light text-center text-pink-main rounded-md">+10500
                    </li>
                    <li class="cursor-pointer p-3 w-18 bg-pink-light text-center text-pink-main rounded-md">+11000
                    </li>
                </ul>
            </div>
            <div class="slider w-32 h-full p-2 flex flex-col justify-center gap-4 items-center">
                <div class="p-2 w-8 h-8 rounded-lg shadow-md bg-white flex justify-center items-center">
                    <i class="fa-solid fa-caret-up"></i>
                </div>
                <div class="flex flex-col gap-8">
                    <div class="side-image w-24 h-24 rounded-lg"></div>
                    <div class="side-image w-24 h-24 rounded-lg"></div>
                    <div class="side-image w-24 h-24 rounded-lg"></div>
                    <div class="side-image w-24 h-24 rounded-lg"></div>
                </div>

                <div class="p-2 w-8 h-8 rounded-lg shadow-md bg-white flex justify-center items-center">
                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style>
.main-image {
    background: url(@/assets/images/main.png);
    background-size: cover;
}

.user-image {
    background: url(@/assets/images/user.png);
    background-size: cover;
}

.side-image {
    background: url(@/assets/images/side.png);
    background-size: cover;
}

.move-it {
    top: 28px;
    left: -6px;
}

.slider {
    position: absolute;
    top: -80px;
    right: -142px;
}
</style>
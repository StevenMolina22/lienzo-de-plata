<template>
    <section>
        <HeaderThree />
        <div class="wrapper">
            <div class="gallery">
                <ProductCardTwo class="gallery-item" v-for="index in 9" :key="index" />
            </div>
            <NewsSidebar class="sidebar" />
        </div>
    </section>
</template>

<style>
/* Ensure the wrapper is a flex container with space for the sidebar */
.wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 6rem;
}

/* Style the gallery as a grid with responsive columns */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
    gap: 1rem;
    flex: 1;  /* Allow the gallery to take available space */
    padding: 0 2rem;
    justify-content: center;
    justify-items: center;
}


/* Ensure the sidebar has a fixed width and does not shrink */
.sidebar {
    max-width: 16rem;
    flex-shrink: 0;
}

@media(max-width: 768px) {
    .sidebar {
        display: none;
    }
    .wrapper {
        padding: 3rem 1rem;
    }
}
</style>

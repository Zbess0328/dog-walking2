const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${walkerCityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${walkerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${walkerAssignments()}
</article>}
`


mainContainer.innerHTML = applicationHTML
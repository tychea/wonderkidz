```JS
<script>
	let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];
	let search = [];
	function findKeyword(e){
		search=fruits.filter(fruit=>fruit.toLowerCase().includes(e.target.value.toLowerCase()))
		console.log(search);
	}
</script>
<div style="display:flex;justify-content:space-between;align-item:center;padding:10px">
	{#each fruits as fruit}
	<p style="margin:0">{fruit}</p>
{/each}
</div>
<label style="position:absolute;left:0;" for="searchBox">search</label>
<input style="margin-left:50px" name="searchBox" type="text" on:input={findKeyword}/>
<div style="display:flex;justify-content:space-between;align-item:center;padding:10px">

	{#if search.length>=0}
		{#each search as result }
	<p style="margin:0">{result}</p>
	{/each}
	{/if}
</div>
```

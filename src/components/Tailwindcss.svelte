<style type="text/scss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .form{
    	@apply flex flex-col justify-center items-center;
    	input{
    		@apply mb-5 py-3 px-2 rounded-md bg-transparent border border-grey-light;
    	}
    	button{
    		@apply w-full mb-5 bg-success py-2 rounded-lg text-white font-bold;
    	}
    }
</style>

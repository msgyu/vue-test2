<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="title" class="col-sm-3 col-form-label"
                            >Title</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control"
                            id="title"
                            v-model="task.title"
                        />
                        <p>{{ task.title }}</p>
                    </div>
                    <div class="form-group row">
                        <label for="content" class="col-sm-3 col-form-label"
                            >Content</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control"
                            id="content"
                            v-model="task.content"
                        />
                        <p>{{ task.content }}</p>
                    </div>
                    <div class="form-group row">
                        <label for="author" class="col-sm-3 col-form-label"
                            >author</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control"
                            id="author"
                            v-model="task.author"
                        />
                        <p>{{ task.author }}</p>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            task: {}
        };
    },
    methods: {
        submit() {
            console.log(this.task);
            axios.post("/api/tasks", this.task).then(res => {
                this.$router.push({ name: "task.list" });
            });
        }
    }
};
</script>

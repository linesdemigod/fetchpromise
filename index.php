<?php
require_once 'layouts/header.php';
require_once 'layouts/navigation.php';
?>
<main>
    <section class="py-5">
        <div class="container mx-auto px-4">
            <p class="form-message bg-gray-200 text-center"></p>
            <form id="user-info" method="POST">
                <label for="name">Name</label>
                <input type="text" name="name" class="border" id="name">

                <label for="sex">Sex</label>
                <input type="text" name="sex" class="border" id="sex">

                <label for="hobby">Hobby</label>
                <input type="text" name="hobby" class="border" id="hobby">

                <input type="submit" name="submit" value="Submit" class="btn">
            </form>
        </div>
    </section>
    <section class="py-5">
        <div class="container mx-auto px-4">
            <button class="btn" id="btn">Get Users</button>
            <br><br>
            <h1 class="text-blue-800 text-bold">Users</h1>
            <div>
                <ul id="users">

                </ul>
            </div>
        </div>
    </section>
</main>
<?php
require_once 'layouts/footer.php';
?>
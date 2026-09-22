"use strict";

const fn = () => {
    const objConst = {
        name: "Alex"
    }

    let objLet = {
        name: "John"
    }

    objConst.name = "Bob";
    objLet.name = "Mike";

    //objConst = {
    //    name: "Tom"
    //}

    objLet = {
        name: "Sam"
    }

    console.log(objConst);
    console.log(objLet);
}

fn();

// objConst це констанція, тому ми можемо змінювати властивості об'єкта, але не можемо переназначити сам об'єкт
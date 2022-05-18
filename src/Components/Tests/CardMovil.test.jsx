import {fireEvent, render, prettyDOM} from "@testing-library/react"
import CardMovil from "./CardMovil";

test("Tests unitarios StdCard", () => {

    const elementoTarjeta = {
        os: "Android",
        brand: "Samsung",
        phone_name: "Galaxy S21",
        dimensions: "200x150x10",
        storage: "64GB"
    }

    const funcion = jest.fn();

    const componente = render(
        <CardMovil cardItem={elementoTarjeta}
        onClickCard={funcion}
        buttonText="Boton tarjeta" />
    );

    componente.getByText("Almacenamiento: 64GB")
    const botonTarjeta = componente.getByText("Boton tarjeta")

    fireEvent.click(botonTarjeta);
    expect(funcion).toHaveBeenCalledTimes(1);

});
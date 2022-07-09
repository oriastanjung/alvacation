export default (number) => {
    const numberFormating = new Intl.NumberFormat("id-ID");
    return numberFormating.format(number);
}

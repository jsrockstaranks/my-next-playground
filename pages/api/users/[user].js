export default async function poduct(req, res){
    const query = req.query;
    const { user } = query;
    // console.log(user, ' user called');
    // res.status(200).json(user);
    const data =  await import(`../../../data-assets/users/${user}.json`);
    // console.log(user, data, ' imported data');
    res.status(200).json(data)
    // use productId to retrieve the product from your database
    // then send this data back to the client
}
import Menu1, { MenuItem } from "./MenuComponent";
import Link from 'next/link'
import { useState } from "react"

const InfoPageMenu = ({ menu }) => {
    return (
        <div>
            <Menu1>
                <Link href="/where-buy"><MenuItem active={menu === "Где купить"} > Где купить</MenuItem></Link>
                <Link href="/payments">  <MenuItem active={menu === "Способы оплаты"} > Способы оплаты </MenuItem></Link>
                <Link href="/delivery">   <MenuItem active={menu === "Доставка и установка"} > Доставка и установка</MenuItem></Link>
                <Link href="/production">  <MenuItem active={menu === "Срок изготовления"} > Срок изготовления </MenuItem></Link>
                <Link href="/garanty">  <MenuItem active={menu === "Гарантии"} > Гарантии </MenuItem></Link>
                <Link href="/requisites"> <MenuItem active={menu === "Реквизиты"} > Реквизиты</MenuItem></Link>
            </Menu1>
        </div>
    )
}
export default InfoPageMenu
import React from 'react'
import "./TransactionCard.css"
import Transaction from './Transaction'

const TransactionCard = () => {
    return (
        <div>
            <h1 className = "transTitle">Transactions</h1>
            <div className='card'>
                <div className="column-titles">
                    {/* Account */}
                    <div className='title'>
                        <p>Account</p>
                    </div>
                    <div className='title'>
                        {/* Date */}
                        <p>&ensp;&ensp;Date&ensp;&ensp;&ensp;&ensp;&ensp;</p>
                    </div>
                    {/* Location */}
                    <div className='title'>
                        <p>&ensp;Location&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</p>
                    </div>
                    {/* Amount */}
                    <div className='title'>
                        <p>Amount</p>
                    </div>
                </div>

                <Transaction account="1" date="1-6-22" location="AMC Bellvue" amount="$12.45" />
                <Transaction account="2" date="1-8-22" location="AMC Bellvue2" amount="$15.37" />
                <Transaction account="3" date="1-2-22" location="AMC Bellvue3" amount="$10.18" />
            </div>
        </div>

    )
}

export default TransactionCard

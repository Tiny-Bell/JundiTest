<template>
    <div>
        <div style="margin-bottom:10px">
            <span style="display: inline-block; margin-left:30px;font-size: 16px;line-height: 50px;">已选择0项</span>
            <el-button class="el_button" plain><i class="iconfont icon-fuhefenxi"></i> 一键催缴</el-button>
        </div>
        <el-table :row-class-name="tableClass" :header-cell-style="{ background: '#e7f3fb', color: '#606266' }" size='medium'
            ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 95%;margin:0 auto">
            <el-table-column type="selection" width="120">
            </el-table-column>
            <el-table-column label="业主变化" width="120" align="center">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="业主名称" align="center">
            </el-table-column>
            <el-table-column prop="balance" label="电费余额(元)" show-overflow-tooltip width="260" align="center">
                <template slot-scope="{row,index}">
                    <span style="display: inline-block;width: 100px; margin-right:5px">{{ row.balance }}</span>
                    <el-tag type="danger" size="mini" style="margin-right:10px">欠費</el-tag>
                    <span :style="{ color: row.color }">{{ row.outage }}</span>
                </template>
            </el-table-column>
            <el-table-column label="手动催缴电费" show-overflow-tooltip align="center">
                <template slot-scope="{row,index}">
                    <el-button size='mini' style="color:#69b8ce ;border:#69b8ce 1px solid;" round>手动缴费</el-button>
                </template>
            </el-table-column>
            <el-table-column label="自动催缴电费" show-overflow-tooltip align="center">
                <template slot-scope="{row,index}">
                    <el-switch v-model="row.value1" active-color="#69b8ce"></el-switch>
                    <span style="color:#69b8ce;border-bottom: 1px solid #69b8ce; margin-left: 5px;">设置</span>
                </template>
            </el-table-column>
            <el-table-column label="手动断电" show-overflow-tooltip align="center">
                <template slot-scope="{row,index}">
                    <el-button size='mini' style="color:#69b8ce ;border:#69b8ce 1px solid;" round>手动缴费</el-button>
                </template>
            </el-table-column>
            <el-table-column label="自动断电" show-overflow-tooltip align="center">
                <template slot-scope="{row,index}">
                    <el-switch active-color="#69b8ce" v-model="row.value2"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="断点阈值" show-overflow-tooltip align="center">
                <template slot-scope="{row,index}">
                    <el-input style="width:80px" size="mini" v-model="row.value3"></el-input>
                    <!-- <input type="text"> -->
                    <span style="color:#69b8ce;border-bottom: 1px solid #69b8ce; margin-left: 5px;">应用</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import '@/assets/font/iconfont.css'
export default {
    name: 'TablePage',
    data() {
        return {
            tableData: [
                {
                    date: 'A0802',//业主
                    name: '8号楼出租',//名称
                    balance: '-20202.12',//余额
                    outage: '已断电',
                    color: 'red',//手动电费
                    value1: true,//自动电费
                    value2: true,//自动断电
                    value3: 350//阈值
                },
                {
                    date: 'A0102',//业主
                    name: '诺基亚',//名称
                    balance: '-4023.300.10',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: false,//自动电费
                    value2: false,//自动断电
                    value3: 0//阈值
                },

                {
                    date: 'A1201',//业主
                    name: '移动机房',//名称
                    balance: '-123.535.63',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 0//阈值
                },

                {
                    date: 'A0705',//业主
                    name: '纪工委',//名称
                    balance: '-424.5322',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: false,//自动电费
                    value2: false,//自动断电
                    value3: 0//阈值
                },

                {
                    date: 'A0603',//业主
                    name: '清华院',//名称
                    balance: '-35263.112',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 4223//阈值
                },
                {
                    date: 'A0432',//业主
                    name: '柴悦餐饮',//名称
                    balance: '-3429.92.2',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 871//阈值
                },
                {
                    date: 'A3424',//业主
                    name: '科大讯飞',//名称
                    balance: '-0842.212.2',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 2421//阈值
                },
                {
                    date: 'A3520',//业主
                    name: '交大2成',//名称
                    balance: '-342342.60',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 1000//阈值
                },
                {
                    date: 'A4220',//业主
                    name: '中鈡2成',//名称
                    balance: '-1546342.60',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: true,//自动电费
                    value2: false,//自动断电
                    value3: 1000//阈值
                },

                {
                    date: 'A4230',//业主
                    name: 'DJ',//名称
                    balance: '-214214.60',//余额
                    outage: '供电中',
                    color: 'green',//手动电费
                    value1: false,//自动电费
                    value2: false,//自动断电
                    value3: 0//阈值
                },
            ],
        }
    },
    methods: {
        tableClass({ row, rowIndex }) {
            if (rowIndex % 2 == 1) {
                //奇数行，序号不能被2整除
                return "even-row";
            } else {
                return "";
            }
        },
        }
}
</script>

<style scoped>
.el_button {
    background-color: #69b8ce;
    color: white;
    border: #69b8ce 1px solid;
    float: right;
    margin-right: 30px;
}
/deep/.even-row{
 background-color:#f7f9fb; 
}
</style>
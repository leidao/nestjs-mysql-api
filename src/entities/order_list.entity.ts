import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';


@Entity('order_list')
export class OrderListEntity {

	@PrimaryGeneratedColumn({
		type: 'int',
		name: 'id',
		comment: '主键id',
	})
	id: number;


	@Column('varchar', {
		nullable: false,
		name: 'order_no',
		comment: '订单号',
	})
	orderNo: string;

	@Column('varchar', {
		nullable: false,
		default: () => 1,
		name: 'person_num',
		comment: '用餐人数',
	})
	personNum: string;


	@Column('varchar', {
		nullable: false,
		name: 'table_id',
		comment: '点餐桌子号',
	})
	tableId: string;


	@Column('int', {
		nullable: false,
		name: 'goods_id',
		comment: '关联商品id',
	})
	goodsId: number | null;

	@Column('varchar', {
		nullable: false,
		name: 'title',
		comment: '标题',
	})
	title: string;

	@Column('varchar', {
		nullable: false,
		name: 'shop_price',
		comment: '单价',
	})
	shopPrice: number;

	@Column('int', {
		nullable: true,
		name: 'goods_type',
		comment: '商品类型:-1表示退货,0表示补单,1表示下单',
	})
	goodsType: number | null;


	@Column('int', {
		nullable: true,
		default: () => 1,
		name: 'num',
		comment: '下单商品数量',
	})
	num: number | null;


	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'remark',
		comment: '备注信息',
	})
	remark: string | null;


	@Column('enum', {
		nullable: true,
		default: () => '1',
		enum: ['0', '1'],
		name: 'status',
		comment: '订单状态,0表示完成,1表示进行中'
	})
	status: string | null;


	@Column('timestamp', {
		nullable: false,
		default: () => 'CURRENT_TIMESTAMP',
		name: 'created_at',
		comment: '创建时间',
	})
	createdAt: Date;


	@Column('timestamp', {
		nullable: false,
		default: () => 'CURRENT_TIMESTAMP',
		name: 'updated_at',
		comment: '最后更新时间',
	})
	updatedAt: Date;

	// @BeforeInsert()
	// makeOrderNo() {
	// 	this.orderNo = `${Date.now()}${Number.parseInt(String(Math.random() * 1000), 10)}`;
	// }
}

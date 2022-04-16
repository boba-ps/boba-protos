"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BossChestInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const WeeklyBossResinDiscountInfo_1 = require("./WeeklyBossResinDiscountInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BossChestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BossChestInfo", [
            { no: 1, name: "monster_config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "remain_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "qualify_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "uid_discount_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo } }
        ]);
    }
    create(value) {
        const message = { monsterConfigId: 0, resin: 0, remainUidList: [], qualifyUidList: [], uidDiscountMap: {} };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 monster_config_id */ 1:
                    message.monsterConfigId = reader.uint32();
                    break;
                case /* uint32 resin */ 2:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 4:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
                    break;
                case /* map<uint32, WeeklyBossResinDiscountInfo> uid_discount_map */ 5:
                    this.binaryReadMap5(message.uidDiscountMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field BossChestInfo.uid_discount_map");
            }
        }
        map[key ?? 0] = val ?? WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 monster_config_id = 1; */
        if (message.monsterConfigId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.monsterConfigId);
        /* uint32 resin = 2; */
        if (message.resin !== 0)
            writer.tag(2, runtime_2.WireType.Varint).uint32(message.resin);
        /* repeated uint32 remain_uid_list = 3; */
        if (message.remainUidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.remainUidList.length; i++)
                writer.uint32(message.remainUidList[i]);
            writer.join();
        }
        /* repeated uint32 qualify_uid_list = 4; */
        if (message.qualifyUidList.length) {
            writer.tag(4, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.qualifyUidList.length; i++)
                writer.uint32(message.qualifyUidList[i]);
            writer.join();
        }
        /* map<uint32, WeeklyBossResinDiscountInfo> uid_discount_map = 5; */
        for (let k of Object.keys(message.uidDiscountMap)) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            WeeklyBossResinDiscountInfo_1.WeeklyBossResinDiscountInfo.internalBinaryWrite(message.uidDiscountMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BossChestInfo
 */
exports.BossChestInfo = new BossChestInfo$Type();

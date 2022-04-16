"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FishPoolInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class FishPoolInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("FishPoolInfo", [
            { no: 1, name: "pool_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fish_area_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "today_fish_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { poolId: 0, fishAreaList: [], todayFishNum: 0 };
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
                case /* uint32 pool_id */ 1:
                    message.poolId = reader.uint32();
                    break;
                case /* repeated uint32 fish_area_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishAreaList.push(reader.uint32());
                    else
                        message.fishAreaList.push(reader.uint32());
                    break;
                case /* uint32 today_fish_num */ 3:
                    message.todayFishNum = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* uint32 pool_id = 1; */
        if (message.poolId !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.poolId);
        /* repeated uint32 fish_area_list = 2; */
        if (message.fishAreaList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishAreaList.length; i++)
                writer.uint32(message.fishAreaList[i]);
            writer.join();
        }
        /* uint32 today_fish_num = 3; */
        if (message.todayFishNum !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.todayFishNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FishPoolInfo
 */
exports.FishPoolInfo = new FishPoolInfo$Type();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MpPlayRewardInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MpPlayRewardInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MpPlayRewardInfo", [
            { no: 1, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "remain_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "qualify_uid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { resin: 0, remainUidList: [], qualifyUidList: [] };
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
                case /* uint32 resin */ 1:
                    message.resin = reader.uint32();
                    break;
                case /* repeated uint32 remain_uid_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.remainUidList.push(reader.uint32());
                    else
                        message.remainUidList.push(reader.uint32());
                    break;
                case /* repeated uint32 qualify_uid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.qualifyUidList.push(reader.uint32());
                    else
                        message.qualifyUidList.push(reader.uint32());
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
        /* uint32 resin = 1; */
        if (message.resin !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.resin);
        /* repeated uint32 remain_uid_list = 2; */
        if (message.remainUidList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.remainUidList.length; i++)
                writer.uint32(message.remainUidList[i]);
            writer.join();
        }
        /* repeated uint32 qualify_uid_list = 3; */
        if (message.qualifyUidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.qualifyUidList.length; i++)
                writer.uint32(message.qualifyUidList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MpPlayRewardInfo
 */
exports.MpPlayRewardInfo = new MpPlayRewardInfo$Type();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassivePropParam = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class MassivePropParam$Type extends runtime_5.MessageType {
    constructor() {
        super("MassivePropParam", [
            { no: 1, name: "type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "reaction_info_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "sync_flag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { type: 0, reactionInfoList: [], paramList: [], syncFlag: 0 };
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
                case /* int32 type */ 1:
                    message.type = reader.int32();
                    break;
                case /* repeated uint32 reaction_info_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.reactionInfoList.push(reader.uint32());
                    else
                        message.reactionInfoList.push(reader.uint32());
                    break;
                case /* repeated float param_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.float());
                    else
                        message.paramList.push(reader.float());
                    break;
                case /* uint32 sync_flag */ 4:
                    message.syncFlag = reader.uint32();
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
        /* int32 type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.type);
        /* repeated uint32 reaction_info_list = 2; */
        if (message.reactionInfoList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.reactionInfoList.length; i++)
                writer.uint32(message.reactionInfoList[i]);
            writer.join();
        }
        /* repeated float param_list = 3; */
        if (message.paramList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.float(message.paramList[i]);
            writer.join();
        }
        /* uint32 sync_flag = 4; */
        if (message.syncFlag !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.syncFlag);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MassivePropParam
 */
exports.MassivePropParam = new MassivePropParam$Type();

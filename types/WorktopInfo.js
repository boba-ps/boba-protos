"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorktopInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class WorktopInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("WorktopInfo", [
            { no: 1, name: "option_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_guest_can_operate", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { optionList: [], isGuestCanOperate: false };
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
                case /* repeated uint32 option_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.optionList.push(reader.uint32());
                    else
                        message.optionList.push(reader.uint32());
                    break;
                case /* bool is_guest_can_operate */ 2:
                    message.isGuestCanOperate = reader.bool();
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
        /* repeated uint32 option_list = 1; */
        if (message.optionList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.optionList.length; i++)
                writer.uint32(message.optionList[i]);
            writer.join();
        }
        /* bool is_guest_can_operate = 2; */
        if (message.isGuestCanOperate !== false)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isGuestCanOperate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorktopInfo
 */
exports.WorktopInfo = new WorktopInfo$Type();

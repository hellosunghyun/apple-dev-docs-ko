---
source_path: "documentation/Accelerate/bnnslayerparameterslstm/lstm-flags.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/lstm-flags"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lstmflags:0000:0001">lstm_flags</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lstmflags:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lstmflags:0002:0001">장기 단기 메모리(LSTM) 레이어의 동작을 제어하는 플래그입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lstmflags:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lstmflags:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var lstm_flags: UInt32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Calculates <code>alpha*A*A</code>; if transposed, calculates <code>alpha*A</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">LSTM 동작이 기본 게이트 활성화를 사용함을 지정하려면 <a href="bnnslayerflagslstmdefaultactivations.md">@@TOKEN_0@@</a>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterslstm/input_size.md">var input_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력 요소 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterslstm/hidden_size.md">var hidden_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">은닉 상태의 요소 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparameterslstm/batch_size.md">var batch_size: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력 및 출력 샘플의 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparameterslstm/num_layers.md">var num_layers: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">스택된 LSTM 레이어의 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparameterslstm/seq_len.md">var seq_len: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">순차 입력의 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparameterslstm/dropout.md">var dropout: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">LSTM 레이어 간에 적용할 드롭아웃 비율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparameterslstm/sequence_descriptor.md">var sequence_descriptor: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">각 단계의 배치 크기를 결정하는 부호 없는 정수 요소로 구성된 1차원 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparameterslstm/input_descriptor.md">var input_descriptor: BNNSLSTMDataDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력, 은닉 입력, 셀 상태 입력 데이터의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparameterslstm/output_descriptor.md">var output_descriptor: BNNSLSTMDataDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">출력, 은닉 출력, 셀 상태 출력 데이터의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslayerparameterslstm/input_gate.md">var input_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">기본 sigmoid 활성화를 사용하는 입력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparameterslstm/forget_gate.md">var forget_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">기본 sigmoid 활성화를 사용하는 forget 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslayerparameterslstm/candidate_gate.md">var candidate_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">기본 tanh 활성화를 사용하는 후보 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnslayerparameterslstm/output_gate.md">var output_gate: BNNSLSTMGateDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">기본 sigmoid 활성화를 사용하는 출력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnslayerparameterslstm/hidden_activation.md">var hidden_activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">기본 tanh 활성화를 사용하는 은닉 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslstm/lstm_flags">View on Apple Developer</a>*</span>

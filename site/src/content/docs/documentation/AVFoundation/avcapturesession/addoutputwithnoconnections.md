---
source_path: "documentation/AVFoundation/avcapturesession/addoutputwithnoconnections.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/addoutputwithnoconnections"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addoutputwithnoconnections:0000:0001">addOutputWithNoConnections(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addoutputwithnoconnections:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addoutputwithnoconnections:0002:0001">연결을 만들지 않고 세션에 캡처 출력을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addoutputwithnoconnections:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addoutputwithnoconnections:0004:0006">visionOS 2.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func addOutputWithNoConnections(_ output: AVCaptureOutput)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 세션이 실행 중일 때 호출할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">대부분의 경우 세션에 새 출력을 추가하려면 <a href="avcapturesession/addoutput(_:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">(In an unfiltered depth map, missing values are represented as <code>NaN</code>.)</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>output</code>: 세션에 추가할 캡처 출력입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[var connections: [AVCaptureConnection]](avcapturesession/connections.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">캡처 세션이 포함하는 입력과 출력 간의 연결입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturesession/addconnection(_:">func addConnection(AVCaptureConnection)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 세션에 연결을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturesession/canaddconnection(_:">func canAddConnection(AVCaptureConnection) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">캡처 세션에 연결을 추가할 수 있는지 판별합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturesession/addinputwithnoconnections(_:">func addInputWithNoConnections(AVCaptureInput)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">연결을 형성하지 않고 세션에 캡처 입력을 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturesession/removeconnection(_:">func removeConnection(AVCaptureConnection)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">세션에서 캡처 연결을 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcaptureaudiochannel.md">class AVCaptureAudioChannel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">캡처 연결에서 오디오 채널의 평균 및 피크 전력 레벨을 모니터링하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/addoutputwithnoconnections(_:">Apple Developer에서 보기</a>)*</span>

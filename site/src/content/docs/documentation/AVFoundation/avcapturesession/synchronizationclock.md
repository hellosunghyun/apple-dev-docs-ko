---
source_path: "documentation/AVFoundation/avcapturesession/synchronizationclock.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/synchronizationclock"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:synchronizationclock:0000:0001">synchronizationClock</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationclock:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationclock:0002:0001">출력 동기화에 사용되는 시계입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:synchronizationclock:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0001">iOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0002">iPadOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0003">Mac Catalyst 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0004">macOS 12.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:synchronizationclock:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var synchronizationClock: CMClock? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">모든 캡처 출력 샘플 버퍼 타임스탬프는 동기화 시계의 타임베이스를 기준으로 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 시계는 <a href="avcaptureinput/port.md">@@TOKEN_0@@</a> 객체의 시계와 함께 사용하여 Core Motion 샘플과 같은 외부 데이터 소스와 캡처 출력을 동기화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">다음 예제는 <a href="avcapturevideodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">@@TOKEN_0@@</a>.md) 메서드에서 원래 타임스탬프를 출력 타임스탬프로 역방향 동기화하는 방법을 보여줍니다.</span>

```swift
func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
    // Get the original and capture session clocks.
    guard let port = connection.inputPorts.first,
          let originalClock = port.clock,
          let sessionClock = captureSession?.synchronizationClock else { return }
        
    // Get the presentation timestamp of the current sample buffer.
    let syncedPTS = sampleBuffer.presentationTimeStamp
        
    // Convert the timestamp to the original timebase.
    let originalPTS = sessionClock.convertTime(syncedPTS, to: originalClock)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 key-value 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturesession/masterclock.md">var masterClock: CMClock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">출력 동기화에 사용되는 시계 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/synchronizationclock">View on Apple Developer</a>*</span>

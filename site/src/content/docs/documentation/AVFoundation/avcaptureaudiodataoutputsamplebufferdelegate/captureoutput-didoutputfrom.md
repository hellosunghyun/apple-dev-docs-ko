---
source_path: "documentation/AVFoundation/avcaptureaudiodataoutputsamplebufferdelegate/captureoutput-didoutputfrom.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/captureoutput-didoutputfrom"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:captureoutputdidoutputfrom:0000:0001">captureOutput(_:didOutput:from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captureoutputdidoutputfrom:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captureoutputdidoutputfrom:0002:0001">샘플 버퍼가 기록되었음을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captureoutputdidoutputfrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:captureoutputdidoutputfrom:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captureoutputdidoutputfrom:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captureoutputdidoutputfrom:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captureoutputdidoutputfrom:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:captureoutputdidoutputfrom:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>output</code>: 캡처 출력 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>sampleBuffer</code>: 출력된 샘플 버퍼입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>connection</code>: 연결입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureaudiodataoutputsamplebufferdelegate/captureoutput(_:didoutput:from:">View on Apple Developer</a>)*</span>

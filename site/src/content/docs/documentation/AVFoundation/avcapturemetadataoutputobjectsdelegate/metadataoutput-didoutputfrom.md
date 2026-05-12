---
source_path: "documentation/AVFoundation/avcapturemetadataoutputobjectsdelegate/metadataoutput-didoutputfrom.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/metadataoutput-didoutputfrom"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadataoutputdidoutputfrom:0000:0001">metadataOutput(_:didOutput:from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputdidoutputfrom:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputdidoutputfrom:0002:0001">캡처 출력 객체가 새 메타데이터 객체를 방출했음을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataoutputdidoutputfrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadataoutputdidoutputfrom:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputdidoutputfrom:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputdidoutputfrom:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputdidoutputfrom:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataoutputdidoutputfrom:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The <a href="avcapturemetadataoutput.md">@@TOKEN_0@@</a> object emits only metadata objects whose types are included in its <a href="avcapturemetadataoutput/metadataobjecttypes.md">@@TOKEN_1@@</a> property.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The delegate implements this method to perform additional processing on metadata objects as they become available.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 메서드 범위 외부에서 메타데이터 객체를 사용할 계획이라면 해당 객체에 대한 강한 참조를 보유하고, 더 이상 필요하지 않을 때 그 참조를 제거해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This method is executed on the dispatch queue specified by the <a href="avcapturemetadataoutput/metadataobjectscallbackqueue.md">@@TOKEN_0@@</a> property of the capture metadata output object.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Because this method may be called frequently, your implementation should be efficient to prevent capture performance problems, including dropped metadata objects.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>output</code>: 메타데이터 객체를 캡처하고 방출한 <a href="avcapturemetadataoutput.md">@@TOKEN_1@@</a> 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>metadataObjects</code>: 새로 방출된 메타데이터를 나타내는 <a href="avmetadataobject.md">@@TOKEN_1@@</a> 인스턴스의 배열입니다. <a href="avmetadataobject.md">@@TOKEN_2@@</a>은 추상 클래스이므로 이 배열의 객체는 항상 구체적 하위 클래스의 인스턴스입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>connection</code>: 객체가 방출된 캡처 연결입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturemetadataoutputobjectsdelegate/metadataoutput(_:didoutput:from:">View on Apple Developer</a>)*</span>

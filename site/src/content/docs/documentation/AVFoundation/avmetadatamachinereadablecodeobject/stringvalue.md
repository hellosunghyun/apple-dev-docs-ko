---
source_path: "documentation/AVFoundation/avmetadatamachinereadablecodeobject/stringvalue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/stringvalue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stringvalue:0000:0001">stringValue</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stringvalue:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stringvalue:0002:0001">오류가 보정된 데이터를 사람이 읽을 수 있는 문자열로 디코딩한 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stringvalue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stringvalue:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stringvalue:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stringvalue:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stringvalue:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:stringvalue:0004:0005">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var stringValue: String? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값은 machine-readable code 형식에 따라 이진 페이로드를 디코딩해 만든 <code>NSString</code>이며, 문자열 표현을 생성할 수 없는 경우에는 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var corners: [CGPoint]](avpartialasyncproperty/isplayable-45h5v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">코너 포인트로 구성된 Swift 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatamachinereadablecodeobject/descriptor.md">var descriptor: CIBarcodeDescriptor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Core Image에서 사용되는 바코드 설명입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/stringvalue">View on Apple Developer</a>*</span>

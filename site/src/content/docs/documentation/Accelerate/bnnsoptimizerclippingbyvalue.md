---
source_path: "documentation/Accelerate/bnnsoptimizerclippingbyvalue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingbyvalue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsoptimizerclippingbyvalue:0000:0001">BNNSOptimizerClippingByValue</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerclippingbyvalue:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerclippingbyvalue:0002:0001">A constant that specifes clipping to minimum and maximum values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerclippingbyvalue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerclippingbyvalue:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSOptimizerClippingByValue: BNNSOptimizerClippingFunction { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">프레임워크 작업이 생성할 수 있는 오류를 정의하는 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="averror-swift.struct/airplaycontrollerrequiresinternet.md">static let medium: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">중간 품질 출력을 캡처하기에 적합한 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="averror-swift.struct/airplayreceiverrequiresinternet.md">func backgroundColor(at: String.Index) -&gt; (CGColor?, Range&lt;String.Index&gt;)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 인덱스 위치에서 배경 색상을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsoptimizerclippingfunction/rawvalue.md">var rawValue: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaption/textcolor(at:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsoptimizerclippingnone.md">var BNNSOptimizerClippingNone: BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사용자가 이 앱의 미디어 캡처 권한을 거부했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsoptimizerclippingbynorm.md">var BNNSOptimizerClippingByNorm: BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 앱은 미디어를 재생할 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsoptimizerclippingbyglobalnorm.md">var BNNSOptimizerClippingByGlobalNorm: BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">구성이 소스 미디어에 갭이 있어 소스 미디어를 추가할 수 없습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizerclippingbyvalue">View on Apple Developer</a>*</span>

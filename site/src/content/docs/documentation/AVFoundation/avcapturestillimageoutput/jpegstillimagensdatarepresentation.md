---
source_path: "documentation/AVFoundation/avcapturestillimageoutput/jpegstillimagensdatarepresentation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/jpegstillimagensdatarepresentation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:jpegstillimagensdatarepresentation:0000:0001">jpegStillImageNSDataRepresentation(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jpegstillimagensdatarepresentation:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jpegstillimagensdatarepresentation:0002:0001">JPEG 샘플 버퍼의 정적 이미지 데이터와 메타데이터 첨부 항목에 대한 <code>NSData</code> 표현을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jpegstillimagensdatarepresentation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:jpegstillimagensdatarepresentation:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jpegstillimagensdatarepresentation:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jpegstillimagensdatarepresentation:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:jpegstillimagensdatarepresentation:0004:0004">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func jpegStillImageNSDataRepresentation(_ jpegSampleBuffer: CMSampleBuffer) -> Data?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>jpegSampleBuffer</code>의 <code>NSData</code> 표현입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 이미지를 재압축하지 않고 이미지 데이터와 <code>Exif</code> 메타데이터 샘플 버퍼 첨부 항목을 병합합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">반환된 <code>NSData</code> 객체는 디스크에 쓰기에 적합합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>jpegSampleBuffer</code>: JPEG 이미지 데이터(선택적으로 <code>Exif</code> 메타데이터 샘플 버퍼 첨부 항목이 포함된)를 담고 있는 샘플 버퍼입니다. <code>jpegSampleBuffer</code>가 <code>NULL</code>이거나 JPEG 형식이 아닌 경우 이 메서드는 <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_4@@</a>을 발생시킵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/jpegstillimagensdatarepresentation(_:">Apple Developer에서 보기</a>)*</span>

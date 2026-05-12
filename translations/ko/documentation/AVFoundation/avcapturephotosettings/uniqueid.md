---
source_path: "documentation/AVFoundation/avcapturephotosettings/uniqueid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/uniqueid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:uniqueid:0000:0001">uniqueID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uniqueid:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uniqueid:0002:0001">이 사진 설정 인스턴스의 고유 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:uniqueid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:uniqueid:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uniqueid:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uniqueid:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:uniqueid:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:uniqueid:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var uniqueID: Int64 { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="tracking-photo-capture-progress.md">Tracking photo capture progress</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>[</code>AVCapturePhotoSettings``](avcapturephotosettings.md) 인스턴스를 생성하면 이 속성에 고유 값이 자동으로 할당됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성을 사용해 사진 캡처 요청을 추적합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드를 호출하면, 사진 캡처 출력이 대리자 객체를 호출해 캡처 진행 상태와 결과 정보를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">각 delegate 메서드에는 캡처를 요청할 때 사용한 <a href="avcapturephotosettings.md">@@TOKEN_0@@</a> 객체의 <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_1@@</a> 값과 일치하는 <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_2@@</a> 속성을 가진 <a href="avcaptureresolvedphotosettings.md">@@TOKEN_3@@</a>가 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><a href="avcapturephotosettings.md">@@TOKEN_0@@</a> 인스턴스를 여러 번 캡처에 재사용하는 것은 금지됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002"><a href="avcapturephotooutput/capturephoto(with:delegate:">@@TOKEN_0@@</a>.md) 메서드는 <code>settings</code> 객체의 <a href="avcapturephotosettings/uniqueid.md">@@TOKEN_2@@</a> 값이 이전에 사용한 설정 객체의 어떤 값과도 일치하면 <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_3@@</a> 예외를 발생시킵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var format: [String : Any]?](avcapturephotosettings/format.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처된 사진을 전달할 때 사용할 처리 형식(예: JPEG)을 설명하는 딕셔너리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephotosettings/processedfiletype.md">var processedFileType: AVFileType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">처리된 이미지의 최종 출력에 대한 컨테이너 파일 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturephotosettings/rawfiletype.md">var rawFileType: AVFileType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">RAW 이미지의 최종 출력에 대한 컨테이너 파일 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturephotosettings/rawphotopixelformattype.md">var rawPhotoPixelFormatType: OSType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처된 RAW 사진을 전달할 때 사용하는 Bayer RAW 픽셀 형식의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/uniqueid">View on Apple Developer</a>*</span>

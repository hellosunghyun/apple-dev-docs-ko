---
source_path: "documentation/AVFoundation/avcapturephotosettings/processedfiletype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/processedfiletype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:processedfiletype:0000:0001">processedFileType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processedfiletype:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processedfiletype:0002:0001">처리된 이미지의 최종 출력에 대한 컨테이너 파일 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:processedfiletype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:processedfiletype:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:processedfiletype:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:processedfiletype:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:processedfiletype:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:processedfiletype:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var processedFileType: AVFileType? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 설정을 <a href="avcapturephotosettings/init(rawpixelformattype:rawfiletype:processedformat:processedfiletype:">@@TOKEN_0@@</a>.md) 초기화자로 생성할 때 파일 형식을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">파일 형식을 지정하지 않은 경우 이 값은 <code>nil</code>이며, 사진 출력이 <a href="avcapturephotosettings/format.md">@@TOKEN_1@@</a> 속성에 적합한 기본 파일 형식을 자동으로 선택합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturephotosettings/uniqueid.md">var uniqueID: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 사진 설정 인스턴스의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var format: [String : Any]?](avmetadataidentifier/itunesmetadataalbum.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처한 사진을 전달할 처리 형식(예: JPEG)을 설명하는 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotosettings/rawfiletype.md">var rawFileType: AVFileType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">RAW 이미지 최종 출력의 컨테이너 파일 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephotosettings/rawphotopixelformattype.md">var rawPhotoPixelFormatType: OSType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처한 RAW 사진을 전달할 Bayer RAW 픽셀 형식의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/processedfiletype">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avmetadataidentifier/quicktimemetadatafullframerateplaybackintent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadataidentifier/quicktimemetadatafullframerateplaybackintent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:quicktimemetadatafullframerateplaybackintent:0000:0001">quickTimeMetadataFullFrameRatePlaybackIntent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:quicktimemetadatafullframerateplaybackintent:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:quicktimemetadatafullframerateplaybackintent:0002:0001">이 동영상이 전체 프레임 속도로 재생되어야 하는지 나타내는 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:quicktimemetadatafullframerateplaybackintent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:quicktimemetadatafullframerateplaybackintent:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let quickTimeMetadataFullFrameRatePlaybackIntent: AVMetadataIdentifier
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">일부 앱은 120fps 이상으로 녹화된 동영상을 슬로 모션으로 재생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱에서 고프레임 동영상을 녹화하는 경우, 이 영화 레벨 메타데이터를 추가하여 동영상이 전체 프레임 속도(1)로 재생되는지 슬로 모션 속도(0)로 재생되는지를 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">동영상을 재생하는 앱은 이 메타데이터가 존재할 때 이를 사용해 동작을 제어할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadataidentifier/quicktimemetadataaimedata.md">static let quickTimeMetadataAIMEData: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">값의 형식은 kCMMetadataBaseDataType_RawData입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/quicktimemetadataaccessibilitydescription.md">static let quickTimeMetadataAccessibilityDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영화 파일 콘텐츠의 접근성 설명을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/quicktimemetadataalbum.md">static let quickTimeMetadataAlbum: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">QuickTime에서 앨범 또는 컬렉션의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/quicktimemetadataarranger.md">static let quickTimeMetadataArranger: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">영화 파일 콘텐츠의 편곡자 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/quicktimemetadataartist.md">static let quickTimeMetadataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">영화 파일 콘텐츠의 아티스트 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/quicktimemetadataartwork.md">static let quickTimeMetadataArtwork: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">영화 파일 콘텐츠와 관련된 이미지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/quicktimemetadataauthor.md">static let quickTimeMetadataAuthor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">영화 파일 콘텐츠의 작성자 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/quicktimemetadataautolivephoto.md">static let quickTimeMetadataAutoLivePhoto: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">라이브 포토 동영상에서 자동 모드가 사용되었는지 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/quicktimemetadatacamerafocallength35mmequivalent.md">static let quickTimeMetadataCameraFocalLength35mmEquivalent: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">35mm 필름 상응값으로 정규화된 초점 거리를 나타내는 kCMMetadataBaseDataType_UTF8 형식의 값입니다(예: “50.00mm”).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/quicktimemetadatacameraframereadouttime.md">static let quickTimeMetadataCameraFrameReadoutTime: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">QuickTime에서 카메라 프레임 읽기 시간을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/quicktimemetadatacameraisosensitivity.md">static let quickTimeMetadataCameraISOSensitivity: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">카메라의 ISO 노출 지수 기준 감도를 나타내는 kCMMetadataBaseDataType_UTF8 형식의 값입니다(예: “800”).</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0002">SMPTE RDD 18을 참조합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadataidentifier/quicktimemetadatacameraidentifier.md">static let quickTimeMetadataCameraIdentifier: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">QuickTime의 카메라 식별자를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadataidentifier/quicktimemetadatacameralensirisfnumber.md">static let quickTimeMetadataCameraLensIrisFNumber: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">렌즈를 통과하는 빛의 양을 나타내는 kCMMetadataBaseDataType_UTF8 형식의 값입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0002">이는 유효 렌즈 개구 직경으로 나눈 초점 거리입니다(예: “F2.8” 또는 “2.8”).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadataidentifier/quicktimemetadatacameralensmodel.md">static let quickTimeMetadataCameraLensModel: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">렌즈 모델을 나타내는 kCMMetadataBaseDataType_UTF8 형식의 값입니다(예: “iPhone 16 Pro back camera 6.765mm f/1.78”).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avmetadataidentifier/quicktimemetadatacamerashutterspeedangle.md">static let quickTimeMetadataCameraShutterSpeedAngle: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">노출 기간을 각도(1/60도)로 나타낸 값을 뜻하며, kCMMetadataBaseDataType_UTF8 형식의 값입니다(예: “21600” 또는 “360.00deg””).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadataidentifier/quicktimemetadatafullframerateplaybackintent">View on Apple Developer</a>*</span>

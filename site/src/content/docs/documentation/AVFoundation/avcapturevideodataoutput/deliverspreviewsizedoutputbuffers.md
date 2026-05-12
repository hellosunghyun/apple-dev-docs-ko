---
source_path: "documentation/AVFoundation/avcapturevideodataoutput/deliverspreviewsizedoutputbuffers.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/deliverspreviewsizedoutputbuffers"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:deliverspreviewsizedoutputbuffers:0000:0001">deliversPreviewSizedOutputBuffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:deliverspreviewsizedoutputbuffers:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:deliverspreviewsizedoutputbuffers:0002:0001">출력이 미리보기 크기 버퍼를 제공하도록 구성되는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:deliverspreviewsizedoutputbuffers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:deliverspreviewsizedoutputbuffers:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:deliverspreviewsizedoutputbuffers:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:deliverspreviewsizedoutputbuffers:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:deliverspreviewsizedoutputbuffers:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var deliversPreviewSizedOutputBuffers: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The array contains <a href="https://developer.apple.com/documentation/CoreMedia/CMFormatDescription">@@TOKEN_0@@</a> objects that indicate the format of media samples the track references.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성을 수동으로 설정하려면 먼저 <a href="avcapturevideodataoutput/automaticallyconfiguresoutputbufferdimensions.md">@@TOKEN_0@@</a> 속성을 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var videoSettings: [String : Any]!](avcapturevideodataoutput/videosettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">출력의 압축 설정을 포함하는 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="video-settings.md">Video settings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">표준 키와 값 상수를 사용하여 비디오 처리 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturevideodataoutput/alwaysdiscardslatevideoframes.md">var alwaysDiscardsLateVideoFrames: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오 프레임이 늦게 도착할 경우 삭제할지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturevideodataoutput/automaticallyconfiguresoutputbufferdimensions.md">var automaticallyConfiguresOutputBufferDimensions: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력이 출력 버퍼 크기를 자동으로 구성하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturevideodataoutput/preparescellularradiofornetworkconnection.md">var preparesCellularRadioForNetworkConnection: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">수신자가 예정된 네트워크 활동에 대비해 셀룰러 라디오를 준비해야 하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturevideodataoutput/preservesdynamichdrmetadata.md">var preservesDynamicHDRMetadata: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">수신기가 출력 샘플 버퍼의 기저 픽셀 버퍼에서 동적 HDR 메타데이터를 첨부로 보존해야 하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturevideodataoutput/recommendedmediatimescaleforassetwriter.md">var recommendedMediaTimeScaleForAssetWriter: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">비디오 트랙의 권장 미디어 타임스케일을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[func recommendedMovieMetadata(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [AVMetadataItem]?](avcapturevideodataoutput/recommendedmoviemetadata(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">특정 비디오 코덱 유형과 출력 파일 유형에 대해 AVAssetWriter 입력과 함께 사용되는 무비 수준 메타데이터를 권장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[func recommendedVideoSettings(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정한 코덱과 파일 유형을 사용하여 파일로 비디오를 캡처할 때 적합한 비디오 설정 사전을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[func recommendedVideoSettings(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType, outputFileURL: URL?) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:outputfileurl:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정한 코덱, 파일 유형 및 출력 URL에 대한 권장 출력 설정 사전을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[func recommendedVideoSettingsForAssetWriter(writingTo: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettingsforassetwriter(writingto:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">AVAssetWriterInput에서 사용할 권장 설정을 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/deliverspreviewsizedoutputbuffers">View on Apple Developer</a>*</span>

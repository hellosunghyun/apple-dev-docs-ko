---
source_path: "documentation/AVFoundation/avcapturevideodataoutput/recommendedvideosettings-forvideocodectypeassetwriteroutputfiletypeoutputfileurl.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings-forvideocodectypeassetwriteroutputfiletypeoutputfileurl"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0000:0001">recommendedVideoSettings(forVideoCodecType:assetWriterOutputFileType:outputFileURL:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0002:0001">지정한 코덱, 파일 형식, 출력 URL에 대한 권장 출력 설정 사전입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideosettingsforvideocodectypeassetwriteroutputfiletypeoutputfileurl:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func recommendedVideoSettings(forVideoCodecType videoCodecType: AVVideoCodecType, assetWriterOutputFileType outputFileType: AVFileType, outputFileURL: URL?) -> [String : Any]?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">에셋 라이터 입력을 구성하는 데 적합한, 모든 항목이 채워진 출력 설정 사전입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>videoCodecType</code>: 사용할 비디오 코덱 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>outputFileType</code>: 쓸 출력 파일의 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>outputFileURL</code>: 쓸 출력 파일의 URL입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var videoSettings: [String : Any]!](avcapturevideodataoutput/videosettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력의 압축 설정을 포함하는 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="video-settings.md">Video settings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">표준 키와 값 상수를 사용해 비디오 처리 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturevideodataoutput/alwaysdiscardslatevideoframes.md">var alwaysDiscardsLateVideoFrames: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지연되어 도착한 경우 비디오 프레임을 삭제할지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturevideodataoutput/automaticallyconfiguresoutputbufferdimensions.md">var automaticallyConfiguresOutputBufferDimensions: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">출력이 출력 버퍼 크기를 자동으로 구성하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturevideodataoutput/deliverspreviewsizedoutputbuffers.md">var deliversPreviewSizedOutputBuffers: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">출력이 미리보기 크기의 버퍼를 전달하도록 구성되어 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturevideodataoutput/preparescellularradiofornetworkconnection.md">var preparesCellularRadioForNetworkConnection: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">수신기가 임박한 네트워크 활동을 위해 셀룰러 라디오를 준비해야 하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturevideodataoutput/preservesdynamichdrmetadata.md">var preservesDynamicHDRMetadata: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Indicates whether the receiver should preserve dynamic HDR metadata as an attachment on the output sample buffer’s underlying pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturevideodataoutput/recommendedmediatimescaleforassetwriter.md">var recommendedMediaTimeScaleForAssetWriter: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Indicates the recommended media timescale for the video track.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[func recommendedMovieMetadata(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [AVMetadataItem]?](avcapturevideodataoutput/recommendedmoviemetadata(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Recommends movie-level metadata for a particular video codec type and output file type, to be used with an asset writer input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[func recommendedVideoSettings(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Returns a video settings dictionary appropriate for capturing video to a file with the specified codec and type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[func recommendedVideoSettingsForAssetWriter(writingTo: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettingsforassetwriter(writingto:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Specifies the recommended settings for use with an AVAssetWriterInput.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:outputfileurl:">View on Apple Developer</a>)*</span>
